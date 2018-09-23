// fade.animation.ts

import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const fadeAnimation =
    trigger('fadeAnimation', [
        transition('* => profile', [
            query(':enter',
                style({
                    position: 'fixed'
                })
            ),
            query(':leave',
                style({
                    position: 'absolute',
                    opacity: 1,
                    transform: 'translateY(-10%)',
                    'transform-origin': 'left top'
                }),
                { optional: true }),
            query('.transition-scale-in', [
                style({
                    opacity: 0,
                    transform: 'scale(0.01)'
                })]
            ),
            query('.transition-right-to-left', [
                style({
                    opacity: 0,
                    transform: 'translateX(+100%)'
                })]
            ),
            query('.transition-right-to-left-200', [
                style({
                    opacity: 0,
                    transform: 'translateX(+200%)'
                })], { optional: true }
            ),
            query('.transition-left-to-right', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                })]
            ),
            query('.profile-image',
                style({
                    position: 'fixed',
                    top: '12px',
                    left: '32px',
                    width: '40px',
                    height: '40px'
                })
            ),
            query('.fade-in',
                style({
                    opacity: 0
                })
            ),
            query('.profile-info-statistics',
                style({
                    transform: 'translateX(-150%)'
                })
            ),
            group([
                query('.profile-image',
                    animate('0.5s ease', style({
                        'background-image': 'url("assets/profile-image.jpg")',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',
                        'background-position': 'center',
                        'border-radius': '10px',
                        'width': '230px',
                        height: '230px',
                        'margin-bottom': '30px',
                        position: 'fixed',
                        left: '24px',
                        top: '80px'
                    }))
                ),
                query(':leave',
                    animate('0.5s ease',
                        style({
                            transform: 'translateY(400px) scale(5)',
                            opacity: 0
                        })), { optional: true }),
            ]),
            group([
                query('.transition-right-to-left',
                    animate('0.5s ease')
                ),
                query('.transition-right-to-left-200',
                    animate('0.5s ease'), { optional: true }
                ),
                query('.transition-left-to-right',
                    animate('0.5s ease')
                ),
                query('.fade-in',
                    animate('0.5s ease',
                        style({
                            opacity: 1
                        }))
                ),
                query('.profile-info-statistics',
                    animate('0.5s ease')),
            ]),
            group([
                query('.transition-scale-in',
                    animate('0.5s ease')
                ),
            ])
        ])
    ]);