function motsLongs(tabMots = [], longueur)
{
    let lengths = tabMots.filter(word => word.length >= 5)
    console.log(lengths)
}
motsLongs(['aimade','safsafi','multiplication','tableau','car','dor'], 5)