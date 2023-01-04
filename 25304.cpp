#include <iostream>
using namespace std;

int main()
{
    int x;
    int n;
    cin >> x;
    cin >> n;
    int sum = 0;
    for (size_t i = 0; i < n; i++)
    {
        int price, cnt;
        cin >> price;
        cin >> cnt;
        sum += price * cnt;
    }
    if (x == sum)
    {
        cout << "Yes";
    }
    else
    {
        cout << "No";
    }
    return 0;
}