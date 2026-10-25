import 'dart:convert';

/// Builds the page that runs inside the sandbox for an AI-written "web app" widget.
///
/// The page cannot touch NGMY: it has no access to the app's storage, cookies or accounts. It does get a
/// small `localStorage` stand-in so games, to-do lists and counters can remember things; the app keeps those
/// saved for the person using it.
String ngmyWebAppDocument(String html, {required String key, Map<String, String> store = const {}}) {
  final json = jsonEncode(store).replaceAll('<', r'\u003c');
  final safeKey = jsonEncode(key).replaceAll('<', r'\u003c');
  final prelude = '''
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<style>html,body{margin:0;padding:0;min-height:100%;-webkit-tap-highlight-color:transparent;}</style>
<script>
(function(){
  var KEY=$safeKey; var data=$json;
  function post(){try{parent.postMessage({ngmyWebApp:KEY,store:data},'*');}catch(e){}}
  var shim={
    getItem:function(k){return Object.prototype.hasOwnProperty.call(data,k)?data[k]:null;},
    setItem:function(k,v){data[k]=String(v);post();},
    removeItem:function(k){delete data[k];post();},
    clear:function(){data={};post();},
    key:function(i){return Object.keys(data)[i]||null;}
  };
  Object.defineProperty(shim,'length',{get:function(){return Object.keys(data).length;}});
  try{Object.defineProperty(window,'localStorage',{value:shim,configurable:true});}catch(e){}
  try{Object.defineProperty(window,'sessionStorage',{value:shim,configurable:true});}catch(e){}
})();
</script>
''';
  final head = RegExp(r'<head[^>]*>', caseSensitive: false).firstMatch(html);
  if (head != null) {
    return html.replaceRange(head.end, head.end, prelude);
  }
  final htmlTag = RegExp(r'<html[^>]*>', caseSensitive: false).firstMatch(html);
  if (htmlTag != null) {
    return html.replaceRange(htmlTag.end, htmlTag.end, '<head>$prelude</head>');
  }
  return '<!doctype html><html><head>$prelude</head><body>$html</body></html>';
}
