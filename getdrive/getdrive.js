(function($) {
  $(function() {
    var $shareLink = $('#sharelink'),
      $downloadLink = $('#downloadlink'),
      $copyButton = $('#copylinkbtn'),
      $download = $('#download'),
      clipboard;

    $shareLink.on('keyup paste', function() {
      var link = $shareLink.val(),
        l = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
      if(l !== link) {
        $downloadLink.val(l);
        $copyButton.removeAttr('disabled');
      } else {
        $downloadLink.val('');
        $copyButton.attr('disabled', 'disabled');
      }
    });

    $downloadLink.on('click', function() {
      $downloadLink.select();
    });

    clipboard = new Clipboard('#copylinkbtn');
    clipboard.on('success', function(e) {
      $.notify({
        icon: 'glyphicon glyphicon-ok-circle',
        title: 'Đã copy',
        message: e.text,
        url: e.text,
        target: '_blank'
      }, {
        // settings
        type: "success",
        placement: {
          from: "top",
          align: "center"
        }
      });

      $download.on('click', function() {
        location.href='downloadlink';
      });
      // $.notify(e.text + " copied to clipboard.");

      e.clearSelection();
    });

  });
})(jQuery);