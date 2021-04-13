const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userPP = document.getElementById('profilePicture');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if(user){
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userPP.src = user.photoURL;

    }else{
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userPP.src = '#';
    }
});


function slugify(text){
    return text.toString().toLowerCase().trim()
    .replace(/&/g,'-and-')
    .replace(/[\s\W-]+/g,'-')
    .replace(/[^a-zA-Z0-9-_]+/g,'')
}


db = firebase.firestore();
let ref;
let unsubscribe;

const postComment = document.getElementById('postComment');
const comments = document.getElementById('comments');
const commentInput = document.getElementById('commentInput');



auth.onAuthStateChanged(user => {
    
        var postRef = db.collection(slugify(window.location.pathname));

    if(user){
        postComment.onclick = () => {
            postRef.add({
                uid: user.uid,
                name: user.displayName,
                comment: commentInput.value,
                createdAt: Date.now()
            });
            commentInput.value = '';
            commentInput.classList.add("is-valid");
            commentInput.classList.remove("is-invalid");
        }
    }else{
        postComment.onclick = () => {
            commentInput.classList.add("is-invalid");
            commentInput.classList.remove("is-valid");
            alert("You must be signed in to comment")
        }
    }
        unsubscribe = postRef
        .orderBy('createdAt')
        .onSnapshot(querySnapshot => {
            const items = querySnapshot.docs.map(doc => {
                let date = new Date(doc.data().createdAt);
                return `<div>
                <h6>${doc.data().name}</h6><div style="padding-left:2em;"><p>${doc.data().comment}</p><p style="font-size:0.5rem">${date.toUTCString()}</div>
                </div>`
            });
            comments.innerHTML = items.reverse().join('');
        });
    
});
