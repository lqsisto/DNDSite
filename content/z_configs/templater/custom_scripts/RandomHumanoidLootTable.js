


const lootTable = [
    { name: "Cracked Pocket Watch", weight: 0.5, price: 5 },
    { name: "[[Torch]]", weight: 1, price: 0.01 },
    { name: "Dented Tin Mug", weight: 0.5, price: 0.1 },
    { name: "Bag of Dried Fruit", weight: 0.5, price: 1 },
    { name: "[[Waterskin]] (half full)", weight: 2, price: 0.25 },
    { name: "Folding Spoon", weight: 0.2, price: 0.5 },
    { name: "Small Wooden Holy Symbol", weight: 0.3, price: 2 },
    { name: "Bone Dice Set (2 dice)", weight: 0.1, price: 0.5 },
    { name: "[[Tinderbox]]", weight: 1, price: 0.5 },
    { name: "Frayed Scarf", weight: 0.3, price: 0.2 },
    { name: "[[Rations]] (1 day)", weight: 2, price: 0.5 },
    { name: "Small Bag of Teeth (12 humanoid teeth)", weight: 0.1, price: 0.1 },
    { name: "[[Dagger]]", weight: 1, price: 2 },
    { name: "Handwritten Letter (illegible script)", weight: 0, price: 0 },
    { name: "Broken Locket", weight: 0.1, price: 1 },
    { name: "Coin Pouch (7 cp, 3 sp, 1 gp)", weight: 0.3, price: 1.1 },
    { name: "[[Chalk (1 piece)]]", weight: 0, price: 0.01 },
    { name: "Empty Flask", weight: 0.5, price: 0.1 },
    { name: "Stone with a Hole Through It", weight: 0.2, price: 0 },
    { name: "Copper Ring (engraved initials)", weight: 0.1, price: 2 },
    { name: "[[Rope, Hempen (50 feet)]]", weight: 10, price: 1 },
    { name: "Folded Blanket", weight: 3, price: 0.5 },
    { name: "Map Fragment (no landmarks)", weight: 0, price: 0 },
    { name: "Scratched Steel Mirror", weight: 0.5, price: 5 },
    { name: "Pair of Iron Keys", weight: 0.3, price: 1 },
    { name: "Piece of Hard Cheese", weight: 0.5, price: 0.2 },
    { name: "Cloth Doll (button eyes)", weight: 0.4, price: 0.3 },
    { name: "[[Oil (flask)]]", weight: 1, price: 1 },
    { name: "Bundle of 3 Candles", weight: 0.3, price: 0.03 },
    { name: "[[Healing Potion]] (empty vial)", weight: 0.3, price: 0.5 },
    { name: "Whistle", weight: 0.1, price: 0.2 },
    { name: "Small Hammer", weight: 2, price: 1 },
    { name: "Needle and Thread Kit", weight: 0.2, price: 0.5 },
    { name: "[[Crowbar]]", weight: 5, price: 2 },
    { name: "Small Book of Prayers", weight: 1, price: 1 },
    { name: "Pebble Painted Like an Eye", weight: 0.1, price: 0 },
    { name: "Leather Bracers (worn)", weight: 1, price: 3 },
    { name: "Engraved Shell", weight: 0.2, price: 1 },
    { name: "[[Lock (with no key)]]", weight: 1, price: 10 },
    { name: "Leatherbound Journal (empty)", weight: 1, price: 2 },
    { name: "Feather Quill", weight: 0, price: 0.1 },
    { name: "Small Vial of Ink (dried)", weight: 0.1, price: 0.3 },
    { name: "Roll of Bandages", weight: 0.3, price: 0.2 },
    { name: "Stick of Incense", weight: 0, price: 0.1 },
    { name: "Eyepatch", weight: 0.1, price: 0.5 },
    { name: "Threadbare Gloves", weight: 0.2, price: 0.1 },
    { name: "[[Grappling Hook]]", weight: 4, price: 2 },
    { name: "Bundle of Wires", weight: 0.5, price: 1 },
    { name: "Handkerchief with Bloodstain", weight: 0.1, price: 0 },
    { name: "Tiny Bronze Bell", weight: 0.1, price: 1 },
    { name: "Pocket Mirror (cracked)", weight: 0.2, price: 0.5 },
    { name: "[[Manacles]]", weight: 6, price: 2 },
    { name: "Book of Recipes (illegible)", weight: 1, price: 1 },
    { name: "Piece of Soap", weight: 0.2, price: 0.1 },
    { name: "[[Hooded Lantern]] (no oil)", weight: 2, price: 5 },
    { name: "[[Spyglass]] (clouded lens)", weight: 1, price: 50 },
    { name: "Child’s Drawing", weight: 0, price: 0 },
    { name: "[[Signal Whistle]]", weight: 0, price: 0.05 },
    { name: "Wooden Token Marked “Safe”", weight: 0.1, price: 0.1 },
    { name: "[[Ball Bearings (bag of 1,000)]]", weight: 2, price: 1 },
    { name: "[[Alchemist's Fire (flask)]] (used, 1 splash left)", weight: 1, price: 25 },
    { name: "Lockpicks (broken)", weight: 0.1, price: 0.3 },
    { name: "Small Compass (doesn’t work)", weight: 0.3, price: 5 },
    { name: "Handful of Marbles", weight: 0.5, price: 0.2 },
    { name: "Bone Needle", weight: 0.05, price: 0.05 },
    { name: "Tin Box with Dried Herbs", weight: 0.2, price: 0.3 },
    { name: "Bundle of Feathers", weight: 0.1, price: 0.2 },
    { name: "[[Ball of Twine (50 feet)]]", weight: 1, price: 0.1 },
    { name: "Bag of Bones (animal)", weight: 1, price: 0.5 },
    { name: "Crumpled Wanted Poster", weight: 0, price: 0 },
    { name: "[[Potion of Healing]]", weight: 0.5, price: 50 },
    { name: "[[Antitoxin]]", weight: 0.5, price: 50 },
    { name: "Vial of Strange Blue Liquid (unknown effect)", weight: 0.2, price: 10 },
    { name: "Stone Carving of a Spiral", weight: 0.5, price: 5 },
    { name: "Small Clockwork Bird", weight: 1, price: 15 },
    { name: "[[Scroll of Protection (Undead)]]", weight: 0.1, price: 25 },
    { name: "[[Bag of Caltraps]]", weight: 2, price: 1 },
    { name: "[[Lantern, Bullseye]]", weight: 2, price: 10 },
    { name: "[[Dust of Disappearance]] (1 use)", weight: 0.1, price: 250 },
    { name: "[[Tinker’s Tools]] (compact set)", weight: 5, price: 50 },
    { name: "Set of Playing Cards (magical symbols on back)", weight: 0.3, price: 3 },
    { name: "Brass Ring with Elven Runes", weight: 0.1, price: 25 },
    { name: "Key to an Unknown Door", weight: 0.1, price: 1 },
    { name: "Crystal Prism", weight: 0.2, price: 10 },
    { name: "[[Perfume (vial)]]", weight: 0.5, price: 5 },
    { name: "[[Cloak of Billowing]]", weight: 1.5, price: 10 },
    { name: "Pocket-sized Music Box (half a tune)", weight: 0.6, price: 12 },
    { name: "[[Stone of Good Luck (Luckstone)]] (cursed)", weight: 1, price: 0 },
    { name: "Puzzle Box (unsolved)", weight: 1.5, price: 20 },
    { name: "[[Ring of Swimming]]", weight: 0.1, price: 300 },
    { name: "[[Potion of Invisibility]]", weight: 0.5, price: 300 },
    { name: "[[Sending Stone]] (1 of 2)", weight: 0.3, price: 100 },
    { name: "[[Amulet of Proof Against Detection and Location]]", weight: 0.1, price: 500 },
    { name: "[[Quaal's Feather Token (Tree)]]", weight: 0.1, price: 300 },
    { name: "[[Deck of Illusions]] (10 cards)", weight: 0.5, price: 250 },
    { name: "[[Cloak of Elvenkind]]", weight: 1.5, price: 500 },
    { name: "[[Wand of Secrets]]", weight: 1, price: 100 },
    { name: "[[Boots of Striding and Springing]]", weight: 3, price: 400 },
    { name: "[[Driftglobe]]", weight: 1, price: 100 },
    { name: "[[Bag of Holding]] (possibly empty)", weight: 15, price: 400 }
  ];
  


  function getRandomItem(list) {
    if (list.length === 0) return undefined; // Return undefined if the list is empty
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }


  function buildHumanoidLoot() {


    let item = getRandomItem(lootTable); // e.g. ["Iron Ring", "0.1 lb", "2 gp"]

    console.log(item);

    let name = item.name;
    let weight = item.weight;
    let price = item.price;

    console.log(`${name} (Weight: ${weight}, Value: ${price})`);

    return `${name} (Weight: ${weight}, Value: ${price})`;
}


  module.exports = buildHumanoidLoot;