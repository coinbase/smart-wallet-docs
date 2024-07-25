function Plain() {
  const htmlContent = {
    __html: `<html>
<head>
<script src="../js/test.js" defer></script>
</head>
<body>
<button id='testButton'> new test</button>
</body>
</html>`,
  };

  return <div dangerouslySetInnerHTML={htmlContent} />;
}

export default Plain;
