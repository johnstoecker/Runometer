// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  
    title:'The Runometer',
    backgroundColor:'#fff',
    layout: 'vertical'
});

var targetDaysLabel = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:18 },
  text: 'Enter your target days to run:',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

var targetDaysText = Titanium.UI.createTextField({
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	height:30,
	width:50,
});

var daysRunLabel = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:18 },
  text: 'Enter completed days:',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE
});

var daysRunText = Titanium.UI.createTextField({
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
	height:30,
	width:50,
});


var buttonArea = Titanium.UI.createView({
	width:30,
  	height:150,
  	top:150,
  	layout: 'horizontal'
});

targetDaysText.addEventListener('change', function(textField){
	var numDays = parseInt(textField.value);
	win1.remove(buttonArea);
	buttonArea = Titanium.UI.createView({
	   	width:30*numDays,
   		height:30,
	   	top:150,
	  	layout: 'horizontal'
	});
	for(var i=0; i<numDays; i++){
		// win1.remove(view);
		var button = Ti.UI.createButton({
			height: 30,
			width: 30,
			backgroundColor:'#333',
		});
		buttonArea.add(button);
	}
	win1.add(buttonArea);
});

daysRunText.addEventListener('change', function(textField){
	var numDays = parseInt(textField.value);
	var totalDays = buttonArea.children.length;
	if(numDays>totalDays){
		alert("Likely story...");
	}
	else{
		if(numDays===totalDays){
			alert("Awesome!");
		}
		for(var i=0; i<numDays; i++){
			if(buttonArea.children.hasOwnProperty(i)){
				buttonArea.children[i].setBackgroundColor('#0F0');
				console.log('hilo');
			}
		}	
	}
});

win1.add(targetDaysLabel);
win1.add(targetDaysText);
win1.add(daysRunLabel);
win1.add(daysRunText);

// win1.add(view);



win1.open();
