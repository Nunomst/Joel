export function limitString(str, maxlenght)
{
    return str.length > maxlenght ? str.substring(0, maxlenght) + "..." : str;
}