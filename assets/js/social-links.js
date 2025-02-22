const links = {
  instagram:
    "https://www.instagram.com/r.cipovic?igsh=OGZvNXRjN2Y3a2J6&utm_source=qr",
  linkedin: "https://www.linkedin.com/in/radovan-cipovic-3ba7a9312",
  github: "https://github.com/RadovanCipovic",
};

function socialLink(elClass) {
  const elements = document.getElementsByClassName(elClass);
  for (let element of elements) {
    element.href = links[elClass];
  }
}
socialLink("instagram");
socialLink("linkedin");
socialLink("github");
