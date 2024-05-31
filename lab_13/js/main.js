var date = new Date();
let hour = date.getHours();

greetingsSwitch(hour);

function greetingsIF(hour)
{
    if(hour >= 23 || hour < 5)
    {
        alert("Доброї ночі!");
    }
    else 
        if(hour >= 5 && hour < 11)
        {
            alert("Доброго ранку!");
        }
        else
            if(hour >= 11 && hour < 17)
            {
                alert("Доброго дня!");
            }
            else
            {
                alert("Доброго вечора!");
            }
}

function greetingsSwitch(hour)
{
    switch(true)
    {
        case hour >= 23 || hour < 5:
            alert("Доброї ночі!");
            break;

        case hour >= 5 && hour < 11:
            alert("Доброго ранку!");
            break;

        case hour >= 11 && hour < 17:
            alert("Доброго дня!");
            break;

        default:
            alert("Доброго вечора!");
            break;
    }
}