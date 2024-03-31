class Node{
    constructor(data=null,prev=null,next=null){
        this.data=data
        this.prev=prev
        this.next=next
    }
}

class DLL{
    constructor(start=null){
        this.start=start
    }
    is_empty(){
        return this.start===null
    }
    insart_at_first(data){
        let n=new Node(data,null,this.start)
        if(! this.is_empty()){
            this.start.prev=n
        }
        this.start=n
    }
    insart_at_last(data){
        let n =new Node(data)
        if(!this.is_empty()){
            let temp =this.start
            while(temp.next!=null){
                temp=temp.next
            }
            n.prev=temp
            temp.next=n
        }
        else{
            this.start=n
        }
    }
    search_node(data){
        if(this.is_empty()){
            return null
        }
        else{
            let temp=this.start
            while(temp){
                if(temp.data==data){
                    return temp
                    break;
                }
                temp=temp.next
            }
            if(temp==null){
                return null
            }
        }
    }
    insart_before(node,data){
        let isNode= this.search_node(node)
        let n= new Node(data)
        if(isNode){
            if(isNode.prev==null){
                n.next=isNode
                isNode.prev=n
                this.start=n
            }
            else{
                n.next=isNode
                n.prev=isNode.prev
                isNode.prev=n
                n.prev.next=n
            }
        }
        else{
            console.log("Invalid node enter")
        }
    }


    insart_after(node,data){
        let isNode=this.search_node(node)
        let n=new Node(data)
        if(isNode){
            if(isNode.next==null){
                n.prev=isNode
                n.next=isNode.next
                isNode.next=n
            }
            else{
                n.prev=isNode
                n.next=isNode.next
                isNode.next.prev=n
                isNode.next=n
            }
        }
        else{
            console.log("invailade node enter")
        }
    }
    delet_first(){
        if(!this.is_empty()){
            if(this.start.next==null){
                this.start=null
            }
            else{
                this.start=this.start.next
                this.start.prev=null

            }
        }
        else{
            console.log("index error")
        }
    }
    delet_last(){
        if(!this.is_empty()){
            if(this.start.next==null){
                this.start=null
            }
            else{
                let temp=this.start
                while(temp.next.next!=null){
                    temp=temp.next
                }
                temp.next=null
            }
        }
        else{
            console.log("index error")
        }
    }
    delet_node(data){
        let isNode=this.search_node(data)
        if(isNode){
            if(isNode.prev==null && isNode.next==null){
                this.start=isNode.next
            }
            else if(isNode.prev==null){
                this.start=isNode.next
                this.start.prev=null
            }
            else if(isNode.next==null){
                isNode.prev.next=isNode.next
            }
            else{
                isNode.next.prev=isNode.prev
                isNode.prev.next=isNode.next
            }


        }
        else{
            console.log("node not found")
        }
    }
    print(){
        let temp=this.start
        while(temp){
        console.log(temp.data)
        temp=temp.next
        } 
        // console.log(this.start)
    }

}

// driver tools
let d=new DLL()
d.insart_at_first(10)
d.insart_at_first(30)
d.insart_at_first(50)
d.insart_at_last(70)
d.insart_at_last(90)
// console.log(d.search_node(20))
d.insart_before(30,20)
d.insart_after(30,40)
d.delet_first()
d.delet_last()
d.delet_node(20)
d.print()