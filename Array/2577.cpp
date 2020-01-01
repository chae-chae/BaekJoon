//
//  2577.cpp
//  BaekJoon
//
//  Created by 채채 on 01/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int a, b, c;
    char buffer[10];
    scanf("%d", &a);
    scanf("%d", &b);
    scanf("%d", &c);
    int sum = a*b*c;
    int num[10] = { 0, };
    sprintf(buffer, "%d", sum);
    for (int i = 0; i<10; i++) {
        switch (buffer[i]) {
            case '0':
                num[0]++;
                break;
            case '1':
                num[1]++;
                break;
            case '2':
                num[2]++;
                break;
            case '3':
                num[3]++;
                break;
            case '4':
                num[4]++;
                break;
            case '5':
                num[5]++;
                break;
            case '6':
                num[6]++;
                break;
            case '7':
                num[7]++;
                break;
            case '8':
                num[8]++;
                break;
            case '9':
                num[9]++;
                break;
            default:
                break;
        }
    }
    for (int i = 0; i<10; i++) {
        printf("%d\n", num[i]);
    }
    
    return 0;
}
