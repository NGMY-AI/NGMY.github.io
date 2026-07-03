typedef NgmyWebPickedFile = ({String name, dynamic file});
typedef NgmyWebPickCallback = void Function(List<NgmyWebPickedFile> files);

void ngmyWebPickFilesFromUserGesture({
  required NgmyWebPickCallback onResult,
  bool directory = false,
}) {
  onResult([]);
}

Future<List<NgmyWebPickedFile>> pickWebFolderFiles() async => [];

Future<List<NgmyWebPickedFile>> pickWebFiles() async => [];
