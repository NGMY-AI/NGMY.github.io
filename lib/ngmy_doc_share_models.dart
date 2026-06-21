class NgmyDocShareItem {
  const NgmyDocShareItem({
    required this.id,
    required this.name,
    required this.mime,
    required this.sizeBytes,
    required this.createdAt,
    this.note,
    this.fromSender,
    this.shortCode,
    this.stashToken,
  });

  final String id;
  final String name;
  final String mime;
  final int sizeBytes;
  final String createdAt;
  final String? note;
  final String? fromSender;
  final String? shortCode;
  final String? stashToken;

  bool get isImage => mime.startsWith('image/') || _extMatch(const ['jpg', 'jpeg', 'png', 'gif', 'webp', 'heic', 'bmp']);

  bool get isVideo =>
      mime.startsWith('video/') || _extMatch(const ['mp4', 'mov', 'm4v', 'webm', 'avi', 'mkv', '3gp']);

  bool _extMatch(List<String> exts) {
    final dot = name.lastIndexOf('.');
    if (dot < 0 || dot >= name.length - 1) return false;
    return exts.contains(name.substring(dot + 1).toLowerCase());
  }

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
        if (shortCode != null && shortCode!.trim().isNotEmpty) 'shortCode': shortCode,
        if (stashToken != null && stashToken!.trim().isNotEmpty) 'stashToken': stashToken,
      };

  factory NgmyDocShareItem.fromJson(Map<String, dynamic> json) => NgmyDocShareItem(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? 'file').toString(),
        mime: (json['mime'] ?? 'application/octet-stream').toString(),
        sizeBytes: (json['sizeBytes'] as num?)?.toInt() ?? 0,
        createdAt: (json['createdAt'] ?? DateTime.now().toUtc().toIso8601String()).toString(),
        note: json['note']?.toString(),
        fromSender: json['fromSender']?.toString(),
        shortCode: json['shortCode']?.toString(),
        stashToken: json['stashToken']?.toString(),
      );

  NgmyDocShareItem copyWith({
    String? fromSender,
    String? note,
    String? shortCode,
    String? stashToken,
  }) =>
      NgmyDocShareItem(
        id: id,
        name: name,
        mime: mime,
        sizeBytes: sizeBytes,
        createdAt: createdAt,
        note: note ?? this.note,
        fromSender: fromSender ?? this.fromSender,
        shortCode: shortCode ?? this.shortCode,
        stashToken: stashToken ?? this.stashToken,
      );
}
