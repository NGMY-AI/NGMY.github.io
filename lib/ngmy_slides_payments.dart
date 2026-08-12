import 'package:flutter/material.dart';

import 'ngmy_slides_designs.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_stripe_payments.dart';

/// NGMY Slides freemium gate.
///
/// Free: blank decks, Normal class templates, Corporate/Minimal designs,
/// basic editing, basic transitions, Present, PDF download.
/// Pro ($4.99/mo): Professional/Luxury/Bold templates, Luxury/Bold designs,
/// fancy transitions, 9:16, HD/PDF/signature tools, school quiz packs, etc.
abstract final class NgmySlidesPayments {
  static const freeClassCategories = {'Normal'};
  static const paidClassCategories = {'Professional', 'Luxury', 'Bold'};

  static const freeDesignCategories = {'Corporate', 'Minimal', 'Modern'};
  static const paidDesignCategories = {'Luxury', 'Bold'};

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
    'rectangle',
    'circle',
    'arrow',
    'line',
    'triangle',
    'new_slide',
    'present',
  };

  static const freeShapes = {
    NgmySlideShapeKind.rectangle,
    NgmySlideShapeKind.circle,
    NgmySlideShapeKind.triangle,
    NgmySlideShapeKind.arrow,
    NgmySlideShapeKind.line,
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

  static bool isFreeClassCategory(String category) =>
      freeClassCategories.contains(category.trim());

  static bool isPaidClassCategory(String category) =>
      paidClassCategories.contains(category.trim());

  static bool isPaidDesign(NgmySlideDesignDef design) =>
      paidDesignCategories.contains(design.category.trim());

  static bool isPaidThemeId(String themeId) =>
      paidThemeIds.contains(themeId.trim());

  static bool isPaidTransition(NgmySlideTransition transition) =>
      !freeTransitions.contains(transition);

  static bool isPaidAspect(NgmySlideAspectRatio ratio) =>
      ratio == NgmySlideAspectRatio.portrait916;

  static bool isPaidShape(NgmySlideShapeKind kind) => !freeShapes.contains(kind);

  static bool isPaidSchoolLayout(NgmySlideLayout layout) =>
      paidSchoolLayouts.contains(layout);

  static bool isPaidDocTool(String toolId) =>
      !freeDocTools.contains(toolId.trim());
}
