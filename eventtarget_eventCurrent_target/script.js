document.getElementById("para").addEventListener("click",(e)=>{
    console.log(

        ` From para
        Target=${e.target.tagName}, Current Target=${e.currentTarget.tagName}`
    )
})

//When we click on the paragraph the event.target and event.currentTarget points to the same element i.e paragraph. Because, element which triggers the event and element where event listener is attached are the same.


//when we click on the Button, Click listener of the button get executed, event.target and event.currentTarget for this button again remains same.


//Event also bubbled up to the parent element i.e Paragraph, Here the scenario is like this.event.target points to the Button since button is the one who triggers the click event, but event.currentTarget points to the Paragraph and not button, since paragraph is the one where event listener is attached to.

document.getElementById("btn").addEventListener("click",(e)=>{
    console.log(
        ` From button
        Target=${e.target.tagName}, Current Target=${e.currentTarget.tagName}`
    )
})