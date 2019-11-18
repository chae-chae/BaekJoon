//
//  15552.cpp
//  BaekJoon
//
//  Created by 채채 on 18/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int t, a, b;
    scanf("%d", &t);
    for (int i = 0; i<t; i++) {
        scanf("%d %d", &a, &b);
        printf("%d\n", a+b);
    }
    return 0;
}
