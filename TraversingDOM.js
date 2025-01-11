<script>
  $(document).ready(function () {
    // 1.Find all <p> elements within '.container'and highlight them

  // 2. Get the parent of the element with ID 'item'and apply a green border
  $('#item').parent().addClass('parent-highlight');

  //3. Get all child elements of '.list' and highlight them
  $('.list').children().addClass('highlight');

  //4. Get all siblings of the element with ID 'item' and style them
                    $('#item').siblings().addClass('sibling-highlight');
  });
</script>
