//
//  2609.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b;
    scanf("%d %d", &a, &b);
    int gcd = 0, lcm;
    if (a > b) {
        for (int i = b; b >= 0; i--) {
            if (a % i == 0 && b % i == 0) {
                gcd = i;
                break;
            }
        }
    } else {
        for (int i = a; b >= 0; i--) {
            if (a % i == 0 && b % i == 0) {
                gcd = i;
                break;
            }
        }
    }
    int c, d;
    c = a/gcd;
    d = b/gcd;
    lcm = gcd*c*d;
    printf("%d\n%d\n", gcd, lcm);
    return 0;
}
