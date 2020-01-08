//
//  1427.cpp
//  BaekJoon
//
//  Created by 채채 on 09/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
#include <cstring>
int main(void){
    char n[11];
    scanf("%s", n);
    int len = strlen(n);
    int ans[len];
    int temp;
    for (int i = 0; i<len; i++) {
        ans[i] = n[i] - '0';
    }
    int i, j;
    for (i = 1; i<len; i++) {
        temp = ans[i];
        for (j = i-1; j>=0; j--) {
            if (ans[j] > temp) {
                ans[j+1] = ans[j];
            } else {
                break;
            }
        }
        ans[j+1] = temp;
    }
    for (int i = len-1; i>=0; i--) {
        printf("%d", ans[i]);
    }
    return 0;
}
