//
//  2884.cpp
//  BaekJoon
//
//  Created by 채채 on 18/11/2019.
//  Copyright © 2019 chaechae. All rights reserved.
//

#include <stdio.h>
int main(void){
    int hr, m;
    scanf("%d %d", &hr, &m);
    
    if (m < 45) {
        if (hr < 1) {
            hr = 23;
        } else {
            hr--;
        }
        m += 15;
        printf("%d %d", hr, m);
    } else {
        printf("%d %d", hr, m-45);
    }
    
    return 0;
}
