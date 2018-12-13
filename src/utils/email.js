if (window.location.hostname === 'localhost') {
  console.error('Please use dev.aromi.com.ar');
}

export default function email() {
  if (window.location.hostname === 'localhost') {
    return 'No email available';
  }

  const hostname = window.location.hostname.split('.');
  const name = 'magali';
  const server = 'gmail';
  return `${name}${hostname[0]}@${server}.${hostname[1]}`;
}
