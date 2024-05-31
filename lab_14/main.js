var ShopList =
[
    {
        "Name": "Bread",
        "Count": 1,
        "isBought":false
    },
    {
        "Name": "Bag",
        "Count": 1,
        "isBought": true
    },
    {
        "Name": "Pen",
        "Count": 4,
        "isBought": false
    }
]
    
PrintArrayNotBoughtFirst();

AddItem("Apple", 6);
AddItem("Bread", 6);

BuyProduct("Pen");

PrintArrayNotBoughtFirst();

function PrintArrayNotBoughtFirst()
{
    for(let i = 0; i < ShopList.length; i++)
    {
        if(ShopList[i].isBought == false)
        {
            console.log("Name:", ShopList[i].Name, "\nCount:", ShopList[i].Count, "\nBought:", ShopList[i].isBought);
        }
    }

    for(let i = 0; i < ShopList.length; i++)
    {
        if(ShopList[i].isBought == true)
        {
            console.log("Name:", ShopList[i].Name, "\nCount:", ShopList[i].Count, "\nBought:", ShopList[i].isBought);
        }
    }
    console.log("\n=============================================\n\n")
}

function AddItem(Name, Count)
{
    for(let i = 0; i < ShopList.length; i++)
    {
        if(ShopList[i].Name == Name)
        {
            ShopList[i].Count += Count;
            return;
        }
    }

    ShopList.push({"Name": Name, "Count": Count, "isBought": false});
}

function BuyProduct(Name)
{
    for(let i = 0; i < ShopList.length; i++)
    {
        if(ShopList[i].Name == Name)
        {
            ShopList[i].isBought = true;
            return;
        }
    }
}