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

  playPrevious(current){
      console.log(current,"crp");
      this.current=this.tail
      while(this.current) {
        if(this.current.data.songLink==current){
            //console.log("huio",this.current.right.data.songLink);
            if(this.current.left){
                return this.current.left.data.songLink
            }else{
                return this.getFirstSong()
            }
        }
        this.current=this.current.left
      }
  }

  playNext(current) {
      console.log(current,"cr");
      this.current=this.head
      while(this.current){
          console.log("huio",this.current.data.songLink,"p",current);
        if(this.current.data.songLink==current){
            //console.log("huio",this.current.right.data.songLink);
            if(this.current.right){
                return this.current.right.data.songLink
            }else{
                return this.getFirstSong()
            }
        }
        this.current=this.current.right
      }
  }

  insertLast(data) {
    console.log("il");
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

  deleteFirst(){
    if(this.head==this.tail){
      return this.head=this.tail=null
    }

    this.head.right.left=null
    this.current=this.head.right
    this.head.right=null
    this.head=this.current
  }

  deleteLast(){
    if(this.head==this.tail){
      return this.head=this.tail=null
    }

    this.tail.left.right=null
    this.current=this.tail.left
    this.tail.left=null
    this.tail=this.current
  }

  deleteByLink(songLink){
    this.current=this.head
    while(this.current){
      if(this.current.data.songLink==songLink){
        this.current.right.left=this.current.left
        this.current.left.right=this.current.right
        this.current=null
      }
    }
  }

  getCurrentlyPlaying(){

  }

  getSize() {
    console.log("gets");
    return this.size;
  }

  getUserSelectedSong(src){
    this.current=this.head
    while(this.current){
      if(this.current.data.songLink==src) return this.current.data.songLink
      this.current=this.current.right
    }
  }

  getFirstSong() {
    if (this.size == 0) return null;
    return this.head.data.songLink;
  }

  getLastSong() {
    if (this.size == 0) return null;
    return this.tail.data.songLink;
  }

  insertAt(index, data) {
    this.size += 1;
    this.newNode = null;
    console.log(this, "this");
    if (this.head == null) {
      return (this.head = this.tail = new Node(null, data, null));
    }
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
        //this.head.left.right=this.head
        return;
      }
      this.i += 1;
      this.current = this.current.right;
    }
    if(index){
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
      console.log(this.current.data, "hh");
      this.songData.push(this.current.data);
      this.current = this.current.right;
    }
    return this.songData;
  }
}

const linkedList = new LinkedList();

// linkedList.insertAt(0,"http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3")
// linkedList.insertAt(0,"https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3")

export default linkedList;

// 'this.newNode=null
//         console.log(this,"ts")
//         if(this.head==null){
//             this.head=this.tail= new Node(null,data,null)
//             this.size=this.size+1
//         }else{
//             this.i=0;
//             this.current=this.head
//             if(index>this.size) return console.log("returned");
//             while(this.current){
//                 console.log(index,this.i,"i")
//                 if(this.i==index) {
//                     if(index==0){
//                         this.head=new Node(null,data,this.head)
//                         this.head.right.left=this.head
//                     }
//                     if(index==this.size){
//                         this.tail=new Node(this.tail,data,null)
//                         this.tail.left.right=this.tail
//                     }
//                     this.newNode=new Node(this.current.left,data,this.current)
//                     this.current.left.right=this.newNode
//                     this.current.left=this.newNode
//                     console.log("breaking");
//                     break;
//                 };
//                 this.current=this.current.right
//                 console.log("hr")
//                 this.i+=1
//             }
//             // if(this.current.left==null){
//             //     this.head=new Node(null,data,this.current)
//             // }
//             // if(this.current.right==null){
//             //     this.tail=new Node(this.current,data,null)
//             // }
//         }'
