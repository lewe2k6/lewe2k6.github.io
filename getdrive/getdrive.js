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
    });


    clipboard = new Clipboard('#copylinkbtn');
    clipboard.on('success', function(e) {
      
    $downloadButton.on('click', function() {
      window.location.href = downloadLink;
    });

      // $.notify(e.text + " copied to clipboard.");

      e.clearSelection();
    });
  });
})(jQuery);