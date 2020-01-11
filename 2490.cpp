//
//  2490.cpp
//  BaekJoon
//
//  Created by 채채 on 11/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int y[4];
    int cnt = 0;
    for (int i = 0; i<3; i++) {
        scanf("%d %d %d %d", &y[0], &y[1], &y[2], &y[3]);
        for (int j = 0; j<4; j++) {
            if (y[j] == 0) {
                cnt++;
            }
        }
        switch (cnt) {
            case 0:
                printf("E\n");
                break;
            case 1:
                printf("A\n");
                break;
            case 2:
                printf("B\n");
                break;
            case 3:
                printf("C\n");
                break;
            case 4:
                printf("D\n");
                break;
            default:
                break;
        }
        cnt = 0;
    }
    return 0;
}
