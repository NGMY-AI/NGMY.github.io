import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_runtime.dart';

/// Layout helpers for the visual screen studio.
List<Map<String, dynamic>> ngmyLayoutChildren(NgmyAppScreen screen) {
  final layout = ngmyScreenLayout(screen);
  if (layout == null) return [];
  final raw = layout['children'];
  if (raw is! List) return [];
  return raw.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
}

NgmyAppScreen ngmyScreenWithLayoutChildren(NgmyAppScreen screen, List<Map<String, dynamic>> children) {
  final layout = Map<String, dynamic>.from(ngmyScreenLayout(screen) ?? {'type': 'column'});
  layout['type'] ??= 'column';
  layout['children'] = children;
  return screen.copyWith(
    kind: NgmyAppScreenKind.custom,
    data: {...screen.data, 'layout': layout},
  );
}

/// Ensures every screen opens in the layout builder (migrates menu/welcome/content).
NgmyAppScreen ngmyScreenEnsureEditable(NgmyAppScreen screen) {
  if (ngmyScreenLayout(screen) != null) return screen;
  switch (screen.kind) {
    case NgmyAppScreenKind.menu:
      final items = <Map<String, dynamic>>[];
      final raw = screen.data['items'];
      if (raw is List) {
        for (final item in raw) {
          if (item is Map) items.add(Map<String, dynamic>.from(item));
        }
      }
      return ngmyScreenWithLayoutChildren(screen, [
        {'type': 'text', 'text': screen.title, 'style': 'title'},
        {'type': 'menuGrid', 'columns': 2, 'items': items},
      ]);
    case NgmyAppScreenKind.welcome:
      return ngmyScreenWithLayoutChildren(screen, [
        {
          'type': 'hero',
          'emoji': (screen.data['heroEmoji'] ?? '✨').toString(),
          'title': screen.title,
          'subtitle': (screen.data['subtitle'] ?? '').toString(),
        },
        {
          'type': 'button',
          'label': (screen.data['buttonLabel'] ?? 'Get started').toString(),
          'target': (screen.data['buttonTargetScreenId'] ?? '').toString(),
        },
      ]);
    case NgmyAppScreenKind.content:
      return ngmyScreenWithLayoutChildren(screen, [
        {'type': 'text', 'text': screen.title, 'style': 'title'},
        {'type': 'text', 'text': (screen.data['body'] ?? '').toString(), 'style': 'subtitle'},
      ]);
    case NgmyAppScreenKind.form:
      return ngmyScreenWithLayoutChildren(screen, [
        {'type': 'text', 'text': screen.title, 'style': 'title'},
        if (screen.data['fields'] is List)
          {
            'type': 'form',
            'collection': (screen.data['collection'] ?? 'entries').toString(),
            'fields': screen.data['fields'],
            'submitLabel': (screen.data['submitLabel'] ?? 'Submit').toString(),
            'successMessage': (screen.data['successMessage'] ?? 'Saved!').toString(),
          },
      ]);
    default:
      return ngmyScreenWithLayoutChildren(screen, [
        {'type': 'text', 'text': screen.title, 'style': 'title'},
        {'type': 'text', 'text': 'Tap + Add widget below to build this screen.', 'style': 'subtitle'},
      ]);
  }
}

Map<String, dynamic> ngmyNewWidget(String type, {List<NgmyAppScreen> screens = const []}) {
  final homeTarget = screens.isNotEmpty ? screens.first.id : '';
  switch (type) {
    case 'button':
      return {'type': 'button', 'label': 'Continue', 'target': homeTarget, 'action': 'navigate', 'large': true};
    case 'outlined_button':
      return {'type': 'outlined_button', 'label': 'Learn more', 'target': homeTarget};
    case 'text':
      return {'type': 'text', 'text': 'Your text here', 'style': 'subtitle'};
    case 'title':
      return {'type': 'text', 'text': 'Section title', 'style': 'title'};
    case 'hero':
      return {'type': 'hero', 'emoji': '✨', 'title': 'Welcome', 'subtitle': 'Your app tagline'};
    case 'form':
      return {
        'type': 'form',
        'collection': 'entries',
        'submitLabel': 'Save',
        'successMessage': 'Saved!',
        'fields': [
          {'id': 'name', 'label': 'Name', 'type': 'text'},
          {'id': 'details', 'label': 'Details', 'type': 'text'},
        ],
      };
    case 'dataList':
      return {
        'type': 'dataList',
        'collection': 'entries',
        'titleField': 'name',
        'subtitleField': 'details',
        'emptyText': 'Nothing here yet — add your first item.',
        'addLabel': 'Add new',
      };
    case 'menuGrid':
      return {
        'type': 'menuGrid',
        'columns': 2,
        'style': 'classic',
        'items': [
          if (screens.length > 1)
            for (final s in screens.skip(1).take(4))
              {'label': s.title, 'icon': 'menu', 'target': s.id},
        ],
      };
    case 'switch':
      return {'type': 'switch', 'setting': 'notifications', 'label': 'Notifications', 'default': true};
    case 'dark_mode':
      return {'type': 'switch', 'setting': 'dark_mode', 'label': 'Dark mode', 'subtitle': 'Light when off', 'default': false};
    case 'stat':
      return {'type': 'stat', 'collection': 'entries', 'label': 'Total items'};
    case 'workout':
      return {
        'type': 'workoutPlan',
        'planId': 'plan1',
        'title': 'Workout',
        'exercises': [
          {'id': 'ex1', 'name': 'Squats', 'sets': '3x12'},
          {'id': 'ex2', 'name': 'Push-ups', 'sets': '3x10'},
        ],
      };
    case 'checklist':
      return {
        'type': 'checklist',
        'id': 'tasks',
        'items': [
          {'id': 't1', 'label': 'First task'},
          {'id': 't2', 'label': 'Second task'},
        ],
      };
    case 'image':
      return {'type': 'image', 'url': ''};
    case 'spacer':
      return {'type': 'spacer', 'height': 16};
    case 'divider':
      return {'type': 'divider'};
    case 'card':
      return {
        'type': 'card',
        'children': [
          {'type': 'text', 'text': 'Card title', 'style': 'title'},
          {'type': 'text', 'text': 'Card body text', 'style': 'subtitle'},
        ],
      };
    case 'qrCode':
    case 'qr':
      return {'type': 'qrCode', 'data': 'https://example.com', 'label': 'Scan me'};
    case 'qrGenerator':
      return {'type': 'qrGenerator', 'mode': 'url', 'placeholder': 'https://your-site.com', 'collection': 'qr_codes', 'allowSave': true};
    case 'invoiceBuilder':
      return {'type': 'invoiceBuilder', 'collection': 'invoices', 'title': 'Create invoice'};
    case 'reelFeed':
      return {'type': 'reelFeed', 'collection': 'reels'};
    case 'socialFeed':
      return {'type': 'socialFeed', 'collection': 'posts'};
    case 'postComposer':
      return {'type': 'postComposer', 'mode': 'reel', 'collection': 'reels', 'navigateAfter': 'feed'};
    case 'searchHub':
      return {'type': 'searchHub', 'collection': 'bookmarks'};
    case 'profile':
      return {'type': 'profile', 'collection': 'reels', 'handle': '@you'};
    default:
      return {'type': 'text', 'text': 'Widget', 'style': 'subtitle'};
  }
}

String ngmyWidgetTypeLabel(String type) {
  switch (type.toLowerCase()) {
    case 'button':
      return 'Button';
    case 'outlined_button':
      return 'Outlined button';
    case 'form':
      return 'Form (saves data)';
    case 'datalist':
    case 'data_list':
      return 'Data list';
    case 'menugrid':
    case 'menu_grid':
    case 'menu':
      return 'Menu grid';
    case 'switch':
    case 'toggle':
      return 'Toggle switch';
    case 'workoutplan':
    case 'workout_plan':
    case 'workout':
      return 'Workout plan';
    case 'checklist':
      return 'Checklist';
    case 'stat':
    case 'stats':
      return 'Stat counter';
    case 'hero':
      return 'Hero banner';
    case 'image':
      return 'Image';
    case 'card':
      return 'Card';
    case 'qrcode':
    case 'qr_code':
    case 'qr':
      return 'QR code';
    case 'qrgenerator':
    case 'qr_generator':
      return 'QR generator';
    case 'invoicebuilder':
    case 'invoice_builder':
      return 'Invoice builder';
    case 'reelfeed':
    case 'reel_feed':
      return 'Reel feed (TikTok)';
    case 'socialfeed':
    case 'social_feed':
      return 'Social feed';
    case 'postcomposer':
    case 'post_composer':
      return 'Post composer';
    case 'searchhub':
    case 'search_hub':
      return 'Search hub';
    case 'profile':
      return 'Profile';
    case 'tabs':
      return 'Tabs';
    default:
      return type.isEmpty ? 'Text' : type[0].toUpperCase() + type.substring(1);
  }
}

/// Full starter screens for Quick Add — wired with navigation.
NgmyAppScreen ngmyQuickAddScreen(String kind, NgmyAppProject project) {
  final id = 'scr_${DateTime.now().millisecondsSinceEpoch}';
  final homeId = project.homeScreen.id;
  switch (kind) {
    case 'form':
      return NgmyAppScreen(
        id: id,
        title: 'Add Item',
        kind: NgmyAppScreenKind.custom,
        data: {
          'layout': {
            'type': 'column',
            'children': [
              {'type': 'text', 'text': 'Add Item', 'style': 'title'},
              {
                'type': 'form',
                'collection': 'items',
                'submitLabel': 'Save item',
                'successMessage': 'Item saved!',
                'fields': [
                  {'id': 'name', 'label': 'Name', 'type': 'text'},
                  {'id': 'price', 'label': 'Price', 'type': 'number'},
                  {'id': 'notes', 'label': 'Notes', 'type': 'text'},
                ],
              },
              {'type': 'button', 'label': 'Back home', 'target': homeId},
            ],
          },
        },
      );
    case 'list': {
      final formId = project.screens.reversed
          .where((s) => s.title.toLowerCase().contains('add') || ngmyLayoutChildren(s).any((w) => w['type'] == 'form'))
          .map((s) => s.id)
          .firstOrNull;
      return NgmyAppScreen(
        id: id,
        title: 'My Items',
        kind: NgmyAppScreenKind.custom,
        data: {
          'layout': {
            'type': 'column',
            'children': [
              {'type': 'text', 'text': 'My Items', 'style': 'title'},
              {
                'type': 'stat',
                'collection': 'items',
                'label': 'Total items',
              },
              {
                'type': 'dataList',
                'collection': 'items',
                'titleField': 'name',
                'subtitleField': 'price',
                'emptyText': 'No items yet. Use Quick add → Form to add your first item.',
                if (formId != null) 'addTarget': formId,
                'addLabel': 'Add item',
                'allowDelete': true,
              },
              {'type': 'button', 'label': 'Back home', 'target': homeId},
            ],
          },
        },
      );
    }
    case 'settings':
      return NgmyAppScreen(
        id: id,
        title: 'Settings',
        kind: NgmyAppScreenKind.custom,
        data: {
          'layout': {
            'type': 'column',
            'children': [
              {'type': 'text', 'text': 'Settings', 'style': 'title'},
              {'type': 'switch', 'setting': 'notifications', 'label': 'Notifications', 'default': true},
              {'type': 'switch', 'setting': 'dark_mode', 'label': 'Dark mode', 'subtitle': 'Light when off', 'default': false},
              {'type': 'button', 'label': 'Back home', 'target': homeId},
            ],
          },
        },
      );
    case 'store':
      return NgmyAppScreen(
        id: id,
        title: 'Store Home',
        kind: NgmyAppScreenKind.custom,
        data: {
          'layout': {
            'type': 'column',
            'children': [
              {'type': 'hero', 'emoji': '🛍️', 'title': 'My Store', 'subtitle': 'Browse · sell · checkout'},
              {'type': 'stat', 'collection': 'products', 'label': 'Products listed'},
              {
                'type': 'menuGrid',
                'columns': 2,
                'items': [
                  {'label': 'Browse', 'icon': 'shop', 'target': 'products_list'},
                  {'label': 'Sell item', 'icon': 'add', 'target': 'add_product'},
                  {'label': 'Cart', 'icon': 'cart', 'target': 'cart'},
                  {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
                ],
              },
            ],
          },
        },
      );
    default: {
      final items = <Map<String, dynamic>>[
        {'label': 'Home', 'icon': 'home', 'target': homeId},
        for (final s in project.screens.skip(1).take(5))
          {'label': s.title, 'icon': 'menu', 'target': s.id},
      ];
      final settings = project.screens.where((s) => s.title.toLowerCase().contains('setting')).map((s) => s.id).firstOrNull;
      if (settings != null) {
        items.add({'label': 'Settings', 'icon': 'settings', 'target': settings});
      }
      return NgmyAppScreen(
        id: id,
        title: 'Menu',
        kind: NgmyAppScreenKind.custom,
        data: {
          'layout': {
            'type': 'column',
            'children': [
              {'type': 'text', 'text': 'Menu', 'style': 'title'},
              {'type': 'menuGrid', 'columns': 2, 'items': items},
              {'type': 'button', 'label': 'Back home', 'target': homeId},
            ],
          },
        },
      );
    }
  }
}
