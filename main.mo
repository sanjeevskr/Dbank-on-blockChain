import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank{
  stable var currentValue: Float=300;
  stable var startTime =Time.now();
  Debug.print(debug_show(startTime));
  currentValue :=100;
  let id=8616816165165165161;
  // Debug.print(debug_show(id));

  public func topUp(amount: Float){
    currentValue +=amount;
    Debug.print(debug_show(currentValue));
  };
  // topUp();
  public func withdraw(amount: Float){
    let tempamt: Float=currentValue-amount;
    if(tempamt>=0){
      currentValue-=amount;
      Debug.print(debug_show(currentValue));
    } else{
      Debug.print("too less");
    }    
    };
  public query func checkBalance():async Float{
    return currentValue;
  };

  public func compound(){
    let currentTime =Time.now();
    let timeElapsedNS =currentTime -startTime;
    let timeElapsed=timeElapsedNS/1000000000;
    currentValue :=currentValue*(1.01** Float.fromInt(timeElapsed));
    startTime:=currentTime;
  };
}
