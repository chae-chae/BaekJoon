//
//  2752.cpp
//  BaekJoon
//
//  Created by 채채 on 12/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a[3];
    scanf("%d %d %d", &a[0], &a[1], &a[2]);
    int temp;
    for (int i = 0; i<3; i++) {
        for (int j = 0; j<2-i; j++) {
            if (a[j] > a[j+1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    printf("%d %d %d\n", a[0], a[1], a[2]);
    return 0;
}
