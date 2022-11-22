// we create an object that contains coordinates 
menuTopLeftPosition =  {x: '0', y: '0'} 
 
// reference to the MatMenuTrigger in the DOM 
@ViewChild(MatMenuTrigger, {static: true}) matMenuTrigger: MatMenuTrigger; 

/** 
 * Method called when the user click with the right button 
 * @param event MouseEvent, it contains the coordinates 
 * @param item Our data contained in the row of the table 
 */ 
onRightClick(event: MouseEvent, item) { 
    // preventDefault avoids to show the visualization of the right-click menu of the browser 
    event.preventDefault(); 

    // we record the mouse position in our object 
    this.menuTopLeftPosition.x = event.clientX + 'px'; 
    this.menuTopLeftPosition.y = event.clientY + 'px'; 

    // we open the menu 
    // we pass to the menu the information about our object 
    this.matMenuTrigger.menuData = {item: item} 

    // we open the menu 
    this.matMenuTrigger.openMenu(); 

} 