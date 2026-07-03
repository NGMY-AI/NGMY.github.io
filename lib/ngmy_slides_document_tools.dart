import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';

/// Document toolkit entries shown in NGMY Slides → Tools ribbon.
class NgmySlidesDocToolDef {
  const NgmySlidesDocToolDef({required this.id, required this.icon, required this.label});
  final String id;
  final IconData icon;
  final String label;
}

const ngmySlidesDocumentTools = <NgmySlidesDocToolDef>[
  NgmySlidesDocToolDef(id: 'upload_pdf', icon: Icons.picture_as_pdf_rounded, label: 'Upload PDF'),
  NgmySlidesDocToolDef(id: 'sign_paper', icon: Icons.draw_rounded, label: 'Sign Paper'),
  NgmySlidesDocToolDef(id: 'hd_photo', icon: Icons.hd_rounded, label: 'HD Photo'),
  NgmySlidesDocToolDef(id: 'sharpen', icon: Icons.auto_fix_high_rounded, label: 'Sharpen'),
  NgmySlidesDocToolDef(id: 'print', icon: Icons.print_rounded, label: 'Print'),
  NgmySlidesDocToolDef(id: 'rotate', icon: Icons.crop_rotate_rounded, label: 'Rotate'),
  NgmySlidesDocToolDef(id: 'text_box', icon: Icons.text_fields_rounded, label: 'Text Box'),
  NgmySlidesDocToolDef(id: 'picture', icon: Icons.image_rounded, label: 'Picture'),
  NgmySlidesDocToolDef(id: 'title', icon: Icons.title_rounded, label: 'Title'),
  NgmySlidesDocToolDef(id: 'subtitle', icon: Icons.short_text_rounded, label: 'Subtitle'),
  NgmySlidesDocToolDef(id: 'bullets', icon: Icons.format_list_bulleted_rounded, label: 'Bullet List'),
  NgmySlidesDocToolDef(id: 'numbered', icon: Icons.format_list_numbered_rounded, label: 'Numbered'),
  NgmySlidesDocToolDef(id: 'quote', icon: Icons.format_quote_rounded, label: 'Quote'),
  NgmySlidesDocToolDef(id: 'citation', icon: Icons.menu_book_rounded, label: 'Citation'),
  NgmySlidesDocToolDef(id: 'date_stamp', icon: Icons.calendar_today_rounded, label: 'Date Stamp'),
  NgmySlidesDocToolDef(id: 'page_number', icon: Icons.tag_rounded, label: 'Page #'),
  NgmySlidesDocToolDef(id: 'header_bar', icon: Icons.view_agenda_rounded, label: 'Header'),
  NgmySlidesDocToolDef(id: 'footer_bar', icon: Icons.vertical_align_bottom_rounded, label: 'Footer'),
  NgmySlidesDocToolDef(id: 'divider', icon: Icons.horizontal_rule_rounded, label: 'Divider'),
  NgmySlidesDocToolDef(id: 'highlight', icon: Icons.highlight_rounded, label: 'Highlight'),
  NgmySlidesDocToolDef(id: 'redact', icon: Icons.visibility_off_rounded, label: 'Redact'),
  NgmySlidesDocToolDef(id: 'callout', icon: Icons.chat_bubble_outline_rounded, label: 'Callout'),
  NgmySlidesDocToolDef(id: 'checkboxes', icon: Icons.check_box_outlined, label: 'Checklist'),
  NgmySlidesDocToolDef(id: 'table', icon: Icons.table_chart_rounded, label: 'Table'),
  NgmySlidesDocToolDef(id: 'memo', icon: Icons.note_alt_rounded, label: 'Memo'),
  NgmySlidesDocToolDef(id: 'letter', icon: Icons.mail_outline_rounded, label: 'Letter'),
  NgmySlidesDocToolDef(id: 'agenda', icon: Icons.event_note_rounded, label: 'Agenda'),
  NgmySlidesDocToolDef(id: 'toc', icon: Icons.list_alt_rounded, label: 'Contents'),
  NgmySlidesDocToolDef(id: 'sig_line', icon: Icons.gesture_rounded, label: 'Sign Line'),
  NgmySlidesDocToolDef(id: 'initial_line', icon: Icons.edit_rounded, label: 'Initials'),
  NgmySlidesDocToolDef(id: 'approved', icon: Icons.verified_rounded, label: 'APPROVED'),
  NgmySlidesDocToolDef(id: 'draft', icon: Icons.edit_note_rounded, label: 'DRAFT'),
  NgmySlidesDocToolDef(id: 'confidential', icon: Icons.lock_rounded, label: 'Confidential'),
  NgmySlidesDocToolDef(id: 'sticky', icon: Icons.sticky_note_2_rounded, label: 'Sticky Note'),
  NgmySlidesDocToolDef(id: 'progress', icon: Icons.linear_scale_rounded, label: 'Progress'),
  NgmySlidesDocToolDef(id: 'stars', icon: Icons.star_rate_rounded, label: 'Star Rating'),
  NgmySlidesDocToolDef(id: 'equation', icon: Icons.functions_rounded, label: 'Equation'),
  NgmySlidesDocToolDef(id: 'timeline', icon: Icons.timeline_rounded, label: 'Timeline'),
  NgmySlidesDocToolDef(id: 'two_col', icon: Icons.view_column_rounded, label: 'Two Columns'),
  NgmySlidesDocToolDef(id: 'compare', icon: Icons.compare_arrows_rounded, label: 'Compare'),
  NgmySlidesDocToolDef(id: 'duplicate_el', icon: Icons.content_copy_rounded, label: 'Duplicate'),
  NgmySlidesDocToolDef(id: 'delete_el', icon: Icons.delete_outline_rounded, label: 'Delete'),
  NgmySlidesDocToolDef(id: 'bring_fwd', icon: Icons.flip_to_front_rounded, label: 'Bring Front'),
  NgmySlidesDocToolDef(id: 'send_back', icon: Icons.flip_to_back_rounded, label: 'Send Back'),
  NgmySlidesDocToolDef(id: 'align_left', icon: Icons.format_align_left_rounded, label: 'Align L'),
  NgmySlidesDocToolDef(id: 'align_center', icon: Icons.format_align_center_rounded, label: 'Align C'),
  NgmySlidesDocToolDef(id: 'align_right', icon: Icons.format_align_right_rounded, label: 'Align R'),
  NgmySlidesDocToolDef(id: 'word_count', icon: Icons.analytics_outlined, label: 'Word Count'),
  NgmySlidesDocToolDef(id: 'link_text', icon: Icons.link_rounded, label: 'Link'),
  NgmySlidesDocToolDef(id: 'phone', icon: Icons.phone_rounded, label: 'Phone'),
  NgmySlidesDocToolDef(id: 'email', icon: Icons.email_rounded, label: 'Email'),
  NgmySlidesDocToolDef(id: 'qr_placeholder', icon: Icons.qr_code_2_rounded, label: 'QR Placeholder'),
  NgmySlidesDocToolDef(id: 'rectangle', icon: Icons.crop_square_rounded, label: 'Rectangle'),
  NgmySlidesDocToolDef(id: 'circle', icon: Icons.circle_outlined, label: 'Circle'),
  NgmySlidesDocToolDef(id: 'arrow', icon: Icons.arrow_forward_rounded, label: 'Arrow'),
  NgmySlidesDocToolDef(id: 'line', icon: Icons.horizontal_rule_rounded, label: 'Line'),
  NgmySlidesDocToolDef(id: 'triangle', icon: Icons.change_history_rounded, label: 'Triangle'),
  NgmySlidesDocToolDef(id: 'grayscale', icon: Icons.filter_b_and_w_rounded, label: 'Grayscale'),
  NgmySlidesDocToolDef(id: 'brighten', icon: Icons.wb_sunny_outlined, label: 'Brighten'),
  NgmySlidesDocToolDef(id: 'flip_h', icon: Icons.flip_rounded, label: 'Flip H'),
  NgmySlidesDocToolDef(id: 'flip_v', icon: Icons.flip_camera_android_rounded, label: 'Flip V'),
  NgmySlidesDocToolDef(id: 'cover_page', icon: Icons.auto_stories_rounded, label: 'Cover Page'),
  NgmySlidesDocToolDef(id: 'invoice', icon: Icons.receipt_long_rounded, label: 'Invoice'),
  NgmySlidesDocToolDef(id: 'resume', icon: Icons.badge_outlined, label: 'Resume'),
  NgmySlidesDocToolDef(id: 'minutes', icon: Icons.groups_rounded, label: 'Minutes'),
  NgmySlidesDocToolDef(id: 'lab_report', icon: Icons.science_rounded, label: 'Lab Report'),
  NgmySlidesDocToolDef(id: 'rubric', icon: Icons.fact_check_rounded, label: 'Rubric'),
  NgmySlidesDocToolDef(id: 'flashcard_tool', icon: Icons.style_rounded, label: 'Flashcard'),
  NgmySlidesDocToolDef(id: 'quiz_tool', icon: Icons.quiz_rounded, label: 'Quiz Block'),
  NgmySlidesDocToolDef(id: 'worksheet_tool', icon: Icons.assignment_rounded, label: 'Worksheet'),
  NgmySlidesDocToolDef(id: 'outline_share', icon: Icons.share_rounded, label: 'Share Outline'),
  NgmySlidesDocToolDef(id: 'export_json', icon: Icons.file_download_outlined, label: 'Export JSON'),
  NgmySlidesDocToolDef(id: 'new_slide', icon: Icons.add_box_outlined, label: 'New Slide'),
  NgmySlidesDocToolDef(id: 'present', icon: Icons.slideshow_rounded, label: 'Present'),
];

NgmySlideElement ngmySlidesMakeText({
  required String id,
  required String text,
  double x = 0.1,
  double y = 0.1,
  double w = 0.8,
  double h = 0.15,
  double fontSize = 22,
  FontWeight fontWeight = FontWeight.w600,
  FontStyle fontStyle = FontStyle.normal,
  TextDecoration decoration = TextDecoration.none,
  int color = 0xFF111827,
  TextAlign align = TextAlign.left,
  bool bulletList = false,
  NgmySlideTransition textTransition = NgmySlideTransition.fade,
  int textAnimDelayMs = 0,
}) =>
    NgmySlideElement(
      id: id,
      type: NgmySlideElementType.text,
      x: x,
      y: y,
      w: w,
      h: h,
      text: text,
      fontSize: fontSize,
      fontWeight: fontWeight,
      fontStyle: fontStyle,
      decoration: decoration,
      color: color,
      align: align,
      bulletList: bulletList,
      textTransition: textTransition,
      textAnimDelayMs: textAnimDelayMs,
    );

NgmySlideElement ngmySlidesMakeShape({
  required String id,
  NgmySlideShapeKind shape = NgmySlideShapeKind.rectangle,
  double x = 0.1,
  double y = 0.1,
  double w = 0.3,
  double h = 0.12,
  int fillColor = 0x332563EB,
  int strokeColor = 0xFF2563EB,
  double strokeWidth = 2,
}) =>
    NgmySlideElement(
      id: id,
      type: NgmySlideElementType.shape,
      x: x,
      y: y,
      w: w,
      h: h,
      shape: shape,
      fillColor: fillColor,
      strokeColor: strokeColor,
      strokeWidth: strokeWidth,
    );

String ngmySlidesTodayStamp() {
  final n = DateTime.now();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return '${months[n.month - 1]} ${n.day}, ${n.year}';
}
