export function limitString(str, maxlenght)
{
    if(str.length > maxlenght)
    {
        return str.substring(0, maxlenght) + "...";
    }
    else
    {
        return str;
    }
}