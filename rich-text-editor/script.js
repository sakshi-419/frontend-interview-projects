
function formatDoc(cmd) {
  
  document.execCommand(cmd);
}



const handleAddLink = () => {
  const url = prompt("Enter the URL");
  if (url) {
    document.execCommand("createLink", false, url);
  }
};

const handleCode = () => {
  document.execCommand(
    "insertHTML",
    false,
    "<code>" + window.getSelection() + "</code>"
  );
};

function handleFile(action) {
  
}
