//
//  2920.cpp
//  BaekJoon
//
//  Created by 채채 on 01/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int note[8];
    int asd = 0;
    int dsd = 0;
    for (int i = 0; i<8; i++) {
        scanf("%d", &note[i]);
    }
    for (int i = 0, j = 8; i<8; i++, j--) {
        if (i+1 == note[i]) {
            asd++;
        } else if (j == note[i]) {
            dsd++;
        }
    }
    if (asd == 8) {
        printf("ascending\n");
    } else if (dsd == 8) {
        printf("descending\n");
    } else {
        printf("mixed\n");
    }
    return 0;
}
