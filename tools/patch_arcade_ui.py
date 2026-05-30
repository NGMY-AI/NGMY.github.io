path = r'C:/Users/appbu/StudioProjects/ngmy/lib/main.dart'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()
start = next(i for i, l in enumerate(lines) if "if (widget.gameId == 'bubble_pop')" in l)
end = next(i for i, l in enumerate(lines) if "if (widget.gameId == 'lucky_doors')" in l)
close = end
depth = 0
for j in range(end, min(end + 40, len(lines))):
    depth += lines[j].count('{') - lines[j].count('}')
    if j > end and lines[j].strip() == '}' and depth <= 0:
        close = j
        break
insert = """    if (_isArcade && _arcade != null) {
      return buildNgmyArcadeBoard(
        gameId: widget.gameId,
        state: _arcade!,
        onChanged: () => setState(() {}),
        onFullWin: () => unawaited(_payoutWin(subtitle: 'Arcade goal reached!')),
      );
    }

"""
new_lines = lines[:start] + [insert] + lines[close + 1 :]
with open(path, 'w', encoding='utf-8', newline='\n') as f:
    f.writelines(new_lines)
print(f'removed {close - start + 1} lines; inserted arcade block at line {start + 1}')
