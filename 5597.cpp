#include <iostream>
using namespace std;

int main()
{
    int arr[31] = {
        0,
    };
    int input;
    int n, m;
    arr[0] = 1;
    for (size_t i = 1; i < 29; i++)
    {
        cin >> input;
        arr[input] = 1;
    }
    int j;
    for (j = 1; j < 31; j++)
    {
        if (arr[j] != 1)
        {
            n = j;
            break;
        }
    }
    for (j = 1; j < 31; j++)
    {
        if (arr[j] != 1)
        {
            m = j;
        }
    }
    if (n < m)
    {
        cout << n << endl;
        cout << m;
    }
    else
    {
        cout << m << endl;
        cout << n;
    }

    return 0;
}