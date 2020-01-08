//
//  1978.cpp
//  BaekJoon
//
//  Created by 채채 on 09/01/2020.
//  Copyright © 2020 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int n;
    scanf("%d", &n);
    int input;
    int cnt = n;
    for (int i = 0; i<n; i++) {
        scanf("%d", &input);
        if (input == 1) {
            cnt--;
            continue;
        }
        for (int j = 2; j<input; j++) {
            if (input % j == 0) {
                cnt--;
                break;
            }
        }
    }
    printf("%d\n", cnt);
    return 0;
}
