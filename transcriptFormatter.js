const btn = document.getElementById('submit');
btn.addEventListener('click', () => {
    const editorContent = tinymce.get('tiny').getContent();
    const formattedContent = editorContent.replace(/<p[^>]+>/g, "<p>").replace("<p>TRANSCRIPT</p>",'<hr class="my-2x"/><h2>Transcript</h2>').replaceAll(/<strong>|<b><span>/g,'<strong class="sans-serif font-weight-bold">').replaceAll("</span></b>","</strong>").replace(/\d:\d\d:\d\d\.\d/g,'<span class="text-sm text-dark-gray">$&</span><br/>').replaceAll("<p>&nbsp;</p>","").replaceAll(/\[.+?\]/g, '<span class="sans-serif font-weight-bold text-sm letter-spacing-default text-dark-gray">$&</span>');
    const outputElement = document.getElementById('output-content');
    outputElement.innerText = formattedContent;
    


    navigator.clipboard.writeText(formattedContent);
    document.getElementById('confirmation').style.opacity = "1";

});
