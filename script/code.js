let friendsList = [];

function displayFriends() {
  const listElement = document.getElementById('list');
  listElement.innerHTML = '';

  friendsList.forEach(friend => {
    const listItem = document.createElement('li');
    listItem.textContent = friend;
    listElement.appendChild(listItem);
  });
}

function addFriend() {
  const input = document.getElementById('friendInput');
  const friendName = input.value.trim();

  if (friendName.length <= 3) {
    document.getElementById('errorLabel').textContent = 'Name should be more than 3 characters.';
    return;
  }

  if (friendsList.includes(friendName)) {
    document.getElementById('errorLabel').textContent = 'Name already exists in the list.';
    return;
  }

  friendsList.push(friendName);
  displayFriends();
  document.getElementById('errorLabel').textContent = '';


  localStorage.setItem('friends', JSON.stringify(friendsList));

  input.value = '';
}

document.getElementById('friendInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addFriend();
  }
});

window.onload = function() {
  const storedFriends = JSON.parse(localStorage.getItem('friends'));
  if (storedFriends) {
    friendsList = storedFriends;
    displayFriends();
  }
};
