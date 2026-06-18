class NgmyDocShareItem {
  const NgmyDocShareItem({
    required this.id,
    required this.name,
    required this.mime,
    required this.sizeBytes,
    required this.createdAt,
    this.note,
    this.fromSender,
  });

  final String id;
  final String name;
  final String mime;
  final int sizeBytes;
  final String createdAt;
  final String? note;
  final String? fromSender;

  bool get isImage => mime.startsWith('image/');
  bool get isVideo => mime.startsWith('video/');

  String get sizeLabel {
    if (sizeBytes < 1024) return '$sizeBytes B';
    if (sizeBytes < 1024 * 1024) return '${(sizeBytes / 1024).toStringAsFixed(1)} KB';
    if (sizeBytes < 1024 * 1024 * 1024) return '${(sizeBytes / (1024 * 1024)).toStringAsFixed(1)} MB';
    return '${(sizeBytes / (1024 * 1024 * 1024)).toStringAsFixed(2)} GB';
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'mime': mime,
        'sizeBytes': sizeBytes,
        'createdAt': createdAt,
        if (note != null && note!.trim().isNotEmpty) 'note': note,
        if (fromSender != null && fromSender!.trim().isNotEmpty) 'fromSender': fromSender,
      };

  factory NgmyDocShareItem.fromJson(Map<String, dynamic> json) => NgmyDocShareItem(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? 'file').toString(),
        mime: (json['mime'] ?? 'application/octet-stream').toString(),
        sizeBytes: (json['sizeBytes'] as num?)?.toInt() ?? 0,
        createdAt: (json['createdAt'] ?? DateTime.now().toUtc().toIso8601String()).toString(),
        note: json['note']?.toString(),
        fromSender: json['fromSender']?.toString(),
      );

  NgmyDocShareItem copyWith({String? fromSender, String? note}) => NgmyDocShareItem(
        id: id,
        name: name,
        mime: mime,
        sizeBytes: sizeBytes,
        createdAt: createdAt,
        note: note ?? this.note,
        fromSender: fromSender ?? this.fromSender,
      );
}
