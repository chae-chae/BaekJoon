//
//  2908.cpp
//  BaekJoon
//
//  Created by 채채 on 04/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    char a[4], b[4];
    scanf("%s %s", a, b);
    char tempa[4], tempb[4];
    for (int i = 0, j = 2; i<4; i++, j--) {
        tempa[i] = *(a+j);
        tempb[i] = *(b+j);
    }
    int numa = 0;
    int numb = 0;
    numa += (tempa[0]-'0')*100;
    numa += (tempa[1]-'0')*10;
    numa += tempa[2]-'0';
    numb += (tempb[0]-'0')*100;
    numb += (tempb[1]-'0')*10;
    numb += tempb[2]-'0';
    if (numa > numb) {
        printf("%d\n", numa);
    } else {
        printf("%d\n", numb);
    }
    return 0;
}
