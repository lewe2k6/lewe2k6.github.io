(function($) {
  $(function() {
    var $shareLink = $('#sharelink'),
      $downloadLink = $('#downloadlink'),
      $copyButton = $('#copylinkbtn'),
      $downloadButton = $('#downloadbtn'),
      clipboard;

    $shareLink.on('keyup paste', function() {
      var link = $shareLink.val(),
        l = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
      if(l !== link) {
        $downloadLink.val(l);
        $copyButton.removeAttr('disabled');
        $downloadButton.removeAttr('disabled');
      } else {
        $downloadLink.val('');
        $copyButton.attr('disabled', 'disabled');
        $downloadButton.attr('disabled', 'disabled');
      }
    });

    $downloadLink.on('click', function() {
      $downloadLink.select();
      window.open('downloadlink');
    });


    clipboard = new Clipboard('#copylinkbtn');
    clipboard.on('success', function(e) {
    clipboard = new Clipboard('#downloadbtn');
    clipboard.on('success', function(e) {

    });
      // $.notify(e.text + " copied to clipboard.");

      e.clearSelection();
    });
  });
})(jQuery);