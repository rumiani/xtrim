export function getXProfileUsername() {
  const url = window.location.href.replace(/\/$/, '');
  const profileRegex = /^https?:\/\/(www\.)?x\.com\/([A-Za-z0-9_]{1,15})$/;  
  const match = url.match(profileRegex);
  return match && match[2] ? match[2] : null;
}