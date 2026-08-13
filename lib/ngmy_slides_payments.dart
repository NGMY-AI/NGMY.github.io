import 'package:flutter/material.dart';

import 'ngmy_slides_class_templates.dart';
import 'ngmy_slides_designs.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_stripe_payments.dart';

/// NGMY Slides freemium gate.
///
/// Free: blank decks, first 4 class templates, first 5 slide designs,
/// basic editing, basic transitions, Present, PDF download.
/// Pro ($4.99/mo): remaining templates/designs, shapes/signature, fancy
/// transitions, HD/PDF tools, school quiz packs, etc.
abstract final class NgmySlidesPayments {
  /// First N entries in [ngmySlideDesignTemplates] stay free.
  static const freeDesignCount = 5;

  /// First N entries in [ngmyClassPresentationTemplates] stay free.
  static const freeClassTemplateCount = 4;

  static const freeThemeIds = {
    'office_blue',
    'campus_green',
    'sunset',
    'classic',
    'ocean_teal',
    'lavender',
    'coral',
    'forest',
    'berry',
    'sand',
    'ice',
    'mint',
    'aqua',
    'steel',
  };

  static const paidThemeIds = {
    'midnight',
    'rose_gold',
    'slate_pro',
    'neon_night',
    'charcoal',
    'crimson',
    'gold',
    'plum',
  };

  static const freeTransitions = {
    NgmySlideTransition.none,
    NgmySlideTransition.fade,
    NgmySlideTransition.slideLeft,
    NgmySlideTransition.slideRight,
    NgmySlideTransition.slideUp,
    NgmySlideTransition.slideDown,
  };

  static const freeDocTools = {
    'print',
    'rotate',
    'text_box',
    'picture',
    'title',
    'subtitle',
    'bullets',
    'numbered',
    'quote',
    'citation',
    'date_stamp',
    'page_number',
    'header_bar',
    'footer_bar',
    'divider',
    'table',
    'sticky',
    'duplicate_el',
    'delete_el',
    'bring_fwd',
    'send_back',
    'align_left',
    'align_center',
    'align_right',
    'word_count',
    'link_text',
    'phone',
    'email',
    'new_slide',
    'present',
  };

  static const paidSchoolLayouts = {
    NgmySlideLayout.flashcard,
    NgmySlideLayout.quiz,
    NgmySlideLayout.worksheet,
  };

  static Future<bool> hasProAccess({
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final clean = email.trim();
    if (clean.isEmpty) return false;
    return NgmyStripePayments.hasActiveAccess(
      clean,
      NgmyStripeProduct.slidesStudio,
    );
  }

  static Future<bool> ensureProAccess({
    required BuildContext context,
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final clean = email.trim();
    if (clean.isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Sign in to unlock Slides Pro features.')),
        );
      }
      return false;
    }
    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.slidesStudio,
      email: clean,
      isAdmin: isAdmin,
    );
  }

  /// Only the first [freeClassTemplateCount] class templates stay free.
  static bool isPaidClassTemplate(NgmyClassTemplateDef template) {
    final index = ngmyClassPresentationTemplates.indexWhere((t) => t.id == template.id);
    if (index < 0) return true;
    return index >= freeClassTemplateCount;
  }

  /// Only the first [freeDesignCount] designs in the catalog are free.
  static bool isPaidDesign(NgmySlideDesignDef design) {
    final index = ngmySlideDesignTemplates.indexWhere((d) => d.id == design.id);
    if (index < 0) return true;
    return index >= freeDesignCount;
  }

  static bool isPaidThemeId(String themeId) =>
      paidThemeIds.contains(themeId.trim());

  static bool isPaidTransition(NgmySlideTransition transition) =>
      !freeTransitions.contains(transition);

  static bool isPaidAspect(NgmySlideAspectRatio ratio) =>
      ratio == NgmySlideAspectRatio.portrait916;

  /// All insert shapes (rectangle, circle, triangle, arrow, parallelogram,
  /// hexagon, line) require Pro.
  static bool isPaidShape(NgmySlideShapeKind kind) => true;

  static bool isPaidSchoolLayout(NgmySlideLayout layout) =>
      paidSchoolLayouts.contains(layout);

  static bool isPaidDocTool(String toolId) =>
      !freeDocTools.contains(toolId.trim());
}
