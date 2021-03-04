const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.addEventListener('click', () => {
  auth.signInWithPopup(provider);
});

signOutBtn.addEventListener('click', () => {
  auth.signOut();
});

auth.onAuthStateChanged((user) => {
  if (user) {
    // Signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}</h3><p>User ID: ${user.uid}</p>`;
  } else {
    // Not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = ``;
  }
});
