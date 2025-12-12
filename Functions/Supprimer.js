function supprimerDoublons(tab = [])
{
    let unique = [...new Set(tab)];
    console.log(unique)
}
supprimerDoublons(['aimde','aimde','function',1,1,2])