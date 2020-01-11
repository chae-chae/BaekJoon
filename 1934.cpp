//
//  1934.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

//  유클리드 호제법

#include <stdio.h>
int main(void){
    int t;
    scanf("%d", &t);
    for (int i = 0; i<t; i++) {
        int a = 0, b = 0, r, gcd = 0, lcm;
        scanf("%d %d", &a, &b);
        int oria = a;
        int orib = b;
        if (a > b) {
            while (b != 0) {
                r = a%b;
                a = b;
                b = r;
            }
            gcd = a;
        } else {
            while (a != 0) {
                r = b%a;
                b = a;
                a = r;
            }
            gcd = b;
        }
        lcm = gcd * (oria/gcd) * (orib/gcd);
        printf("%d\n", lcm);
    }
    return 0;
}
