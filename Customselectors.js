<script>
  $(document).ready(function () {
    // 1. Select all <div> elements with class 'active'and highlight them
    $('div').filter('active.).addClass('highlight');

   // 2. Select the first <li> element and apply a highlight style
  $('li).first().addClass('highlight');

    //3. Select the third <li> element (0-based index) and change its text color
    $('li').eq(2).css('color', 'blue');
  });
</script>
