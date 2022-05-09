class Node {
  constructor(left, data, right) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.currentlyPlaying = null;
    this.songData = [];
    this.size = 0;
    this.newNode = null;
    this.current = null;
    this.previous = null;
  }

  insertFirst(data) {
    this.size += 1;
    if (this.head == null) {
      return (this.head = this.tail = new Node(null, data, null));
    } else {
      this.newNode = new Node(null, data, null);
      this.head.left = this.newNode;
      this.head.left.right = this.head;
      this.head = this.head.left;
      return;
    }
  }

  playPrevious(current) {
    this.current = this.tail;
    while (this.current) {
      if (this.current.data.songLink == current) {
        if (this.current.left) {
          this.currentlyPlaying = this.current.left.data.songLink;
          return this.currentlyPlaying;
        } else {
          return this.getFirstSong();
        }
      }
      this.current = this.current.left;
    }
  }

  playNext(current) {
    this.current = this.head;
    while (this.current) {
      if (this.current.data.songLink == current) {
        if (this.current.right) {
          this.currentlyPlaying = this.current.right.data.songLink;
          return this.currentlyPlaying;
        } else {
          return this.getFirstSong();
        }
      }
      this.current = this.current.right;
    }
  }

  insertLast(data) {
    this.size += 1;
    if (this.head == null) {
      return (this.head = this.tail = new Node(null, data, null));
    } else {
      this.newNode = new Node(null, data, null);
      this.tail.right = this.newNode;
      this.tail.right.left = this.tail;
      this.tail = this.tail.right;
    }
  }

  deleteFirst() {
    if (this.head == this.tail) {
      this.size = this.size - 1;
      return (this.head = this.tail = null);
    }

    this.head.right.left = null;
    this.current = this.head.right;
    this.head.right = null;
    this.head = this.current;
    this.size = this.size - 1;
  }

  deleteLast() {
    if (this.head == this.tail) {
      this.size = this.size - 1;
      return (this.head = this.tail = null);
    }

    this.tail.left.right = null;
    this.current = this.tail.left;
    this.tail.left = null;
    this.tail = this.current;
    this.size = this.size - 1;
  }

  deleteByLink(songLink) {
    console.log("song link",songLink);
    this.current = this.head;
    while (this.current) {
      if (this.current.data.songLink == songLink) {
        this.current.right.left = this.current.left;
        this.current.left.right = this.current.right;
        this.current = null;
        this.size = this.size - 1;
      }else{
        this.current=this.current.right
      }
    }
  }

  getCurrentlyPlaying() {
    return this.currentlyPlaying;
  }

  getSize() {
    return this.size;
  }

  getUserSelectedSong(src) {
    this.current = this.head;
    while (this.current) {
      if (this.current.data.songLink == src) {
        this.currentlyPlaying = this.current.data.songLink;
        return this.currentlyPlaying;
      }
      this.current = this.current.right;
    }
  }

  showFirstSong() {
    if (this.size == 0) return null;
    return this.head.data.songLink;
  }

  showLastSong() {
    if (this.size == 0) return null;
    return this.tail.data.songLink;
  }

  getFirstSong() {
    if (this.size == 0) return null;
    this.currentlyPlaying = this.head.data.songLink;
    return this.currentlyPlaying;
  }

  getLastSong() {
    if (this.size == 0) return null;
    this.currentlyPlaying = this.tail.data.songLink;
    return this.currentlyPlaying;
  }

  insertAt(index, data) {
    this.size += 1;
    this.newNode = null;
    if (this.head == null) 
      return (this.head = this.tail = new Node(null, data, null));
    
    if (index == 0) {
      this.newNode = new Node(null, data, null);
      this.head.left = this.newNode;
      this.head.left.right = this.head;
      this.head = this.head.left;
      return;
    }

    this.i = 0;
    this.current = this.head;
    while (this.current) {
      if (index == this.i) {
        this.previous = this.current.left;
        this.newNode = new Node(null, data, null);
        this.current.left = this.newNode;
        this.newNode.right = this.current;
        this.newNode.left = this.previous;
        this.previous.right = this.newNode;
        return;
      }
      this.i += 1;
      this.current = this.current.right;
    }

    if (index) {
      this.newNode = new Node(null, data, null);
      this.tail.right = this.newNode;
      this.tail.right.left = this.tail;
      this.tail = this.tail.right;
    }
  }

  getData() {
    this.songData = [];
    this.current = this.head;
    while (this.current) {
      this.songData.push(this.current.data);
      this.current = this.current.right;
    }
    return this.songData;
  }
}

const linkedList = new LinkedList();

export default linkedList;
