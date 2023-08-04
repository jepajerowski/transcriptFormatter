function transcriptReplace(transcript){
    let str = transcript;
    str = str.replace(/<p[^>]+?>/g, "<p>");
    str = str.replace(/<p><span class="Bold">(\d:\d\d:\d\d\.\d)\s(.+?):<\/span>/g, '<div class="text-sm text-dark-gray font-weight-bold mb-1">$1</div>\n<p><span class="sans-serif font-weight-bold">$2:</span>');
    str = str.replaceAll("<p>&nbsp;</p>","");
    str = str.replaceAll(/\[.+?\]/g, '<span class="sans-serif font-weight-bold text-sm letter-spacing-default text-dark-gray">$&</span>');
    h2 = '<hr class="my-2x"/><h2>Transcript</h2>';
    str = h2.concat("\n", str);
    return str;
}

const btn = document.getElementById('submit');
btn.addEventListener('click', () => {
    let transcript = tinymce.get('tiny').getContent();
    transcript = transcriptReplace(transcript);

    const outputElement = document.getElementById('output-content');
    outputElement.innerText = transcript;
    navigator.clipboard.writeText(transcript);
    document.getElementById('confirmation').style.opacity = "1";
});
