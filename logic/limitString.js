export function limitString(str, maxlenght)
{
    return str.length > maxlenght ? str.substring(0, maxlenght) + "..." : str;

    // if(str.length > maxlenght)
    // {
    //     return str.substring(0, maxlenght) + "...";
    // }
    // else
    // {
    //     return str;
    // }
}