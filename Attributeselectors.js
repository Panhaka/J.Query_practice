<script>
  $(document).ready(function () {
    //1.Select input elements with name="email"and highlight them
    $('input[name="email"]').addClass('highlight');

    //2.Select all links starting with "https"and style them
    $('a[href="https"]').addClass('secure-link');

    //3.Select input elements with a "placeholder" attribute and apply a style
    $('input[placeholer]'].addClass('placeholder-highlight');
  });
</script>
